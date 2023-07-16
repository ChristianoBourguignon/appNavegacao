import React, {useEffect, useState, useRef} from 'react';
import{ FontAwesome } from '@expo/vector-icons';
import { Camera, CameraType } from 'expo-camera';
import { useNavigation  } from '@react-navigation/native';
import { View, SafeAreaView, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';

export default function AppCamera() {
  const titleNavigation = useNavigation();
    titleNavigation.setOptions({title: 'Camera'});
  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [hasPermission, setHasPermission] = useState(null);
  const camRef = useRef();
  const [capturePicture, setCapturePicture] = useState(null);
  const [capturedPicture, setCapturedPicture] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, [])

  if (hasPermission === null){
    return <View/>
  } else if (hasPermission === false){
    return <Text> Acesso Negado </Text>
  }
  async function takePicture(){
    if (camRef){
    const data = await camRef.current.takePictureAsync();
    setCapturedPicture(data.uri);
    setOpen(true);
  }}
  function mudarCamera() {
    ( type === CameraType.back ? setType(CameraType.front) :
    setType(CameraType.back)
    )
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Camera
      style={styles.cameraApp}
      type={type}
      ref={camRef}
      ></Camera>
      <View style={styles.containerCamera}>
      <TouchableOpacity style={styles.buttonCamera1} onPress={mudarCamera}>
        <FontAwesome name='exchange' size={25} color='#fff' style={styles.txtButtonCamera} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonCamera2} onPress={takePicture}>
      <FontAwesome name='camera' size={25} color='#fff' style={styles.txtButtonCamera} />
      </TouchableOpacity>
      </View>
      {capturedPicture &&(
      <Modal
      animationType='slide'
      transparent={true}
      visible={open}
      >
      <View style={styles.contentModal}>
        <TouchableOpacity style={styles.closeButton} onPress={() =>{setOpen(false)}}>
          <FontAwesome name='close' size={50} color='#f06' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setOpen(false)}} />
          <Image style={styles.imgPicture} source={{uri : capturedPicture}} />
        </View>
      </Modal>
      )}
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraApp:{
    width: '100%',
    height: '100%',
  },
  buttonCamera1: {
    padding: 20,
    backgroundColor: '#1efa59',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 5,
    borderRadius: 20,
  },
  buttonCamera2: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 5,
    justifyContent: 'flex-start',
    backgroundColor: '#3d98ff',
    borderRadius: 20,
  },
  txtButtonCamera: {
    fontWeight: 900,
  },
  containerCamera: {
    marginTop: 5,
    marginHorizontal: 5,
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    right: 10,
  },
  contentModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'flex-end',
    margin: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 120,
    right: 150,
    margin: 10,
  },
  imgPicture: {
    width: '100%',
    height: 400,
  }
});