import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import Server from './server';
import {images, colors} from './constant';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {FlatList, State} from 'react-native-gesture-handler';
import LoginModal from './AuthModal';
import server from './server';

const BASE_IMG_URL = "https://thecodeditors.com/test/single_vendor/admin/slider_images/";
let BASE_P_IMG_URL = "https://thecodeditors.com/test/multi_vendor/admin/plugin/product_images/";

const Header = () => {
  let navigation = useNavigation();
  return (
    <View style={{height: '12%'}}>
      <View
        style={{
          width: '95%',
          height: 90,
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Entypo name="menu" size={30} />
        </TouchableOpacity>
        <Image source={images.logo} style={{height: 30, width: '30%'}} />
        <Text
          style={{
            position: 'absolute',
            right: '-1%',
            top: '20%',
            fontSize: 10,
            backgroundColor: colors.ORANGE.DEFAULT,
            borderRadius: 50,
            zIndex: 12,
            height: 18,
            width: 18,
            textAlign: 'center',
            paddingTop: 2,
            color: 'white',
          }}>
          23
        </Text>
        <TouchableOpacity
          style={{position: 'absolute', right: '3%'}}
          onPress={() => navigation.navigate('Cart')}>
          <AntDesign name="shoppingcart" size={25} />
          <Text>cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const imageSlider = [
  images.slider1,
  images.slider2,
  images.slider3,
  images.slider4,
];
const Slider = (data) => {
  let navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        index={0}
        showPagination
        autoplayLoop
        disableGesture={true}
        autoplayLoopKeepAnimation={true}
        paginationActiveColor={colors.LIGHTGREY.DEFAULT}
        paginationDefaultColor={colors.TRANSPARENT}>
        {data.data.map((item, key) => (
          <View style={[styles.child]} key={key}>
            <Image source={{uri: BASE_IMG_URL+item.slider_image}}
             style={{position: 'absolute', height: 190,width:'100%'}} />
            <Text style={{fontSize: 18, color: 'black', marginLeft: '5%'}}>
              {item.slider_title}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('WishList')}
              style={{
                backgroundColor: colors.ORANGE.DEFAULT,
                width: '45%',
                marginLeft: '5%',
                padding: 10,
                marginTop: 10,
              }}>
              <Text style={{fontSize: 18, color: 'black'}}>
                Discover Now <AntDesign name="arrowright" size={20} />
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </SwiperFlatList>
    </View>
  );
};
const Slider1 = (data) => {
  let navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        index={0}
        // showPagination
        autoplayLoop
        disableGesture={false}
        autoplayLoopKeepAnimation={true}

        paginationActiveColor={colors.LIGHTGREY.DEFAULT}
        paginationDefaultColor={colors.TRANSPARENT}>
        {data.data.map((item, key) => (
          <View
            style={{
              width: width * 0.48,
              justifyContent: 'center',
              height: 265,
              marginRight: 10,
            }}
            key={key}>
            <AntDesign
              name="hearto"
              style={{
                position: 'absolute',
                zIndex: 12,
                right: 10,
                top: 10,
                color: colors.LIGHTGREY.DEFAULT,
              }}
              size={30}
            />
            <Card.Cover
              source={{uri: BASE_P_IMG_URL+item.image_name}}
              style={{height: height*0.45, width: '100%'}}
            />
            <View style={{padding:2}}>
              <Text
                style={{fontSize: 12, color: colors.LIGHTGREY.DEFAULT}}>
                {item.sale}
              </Text>
              <Text>{item.pro_name}</Text>
              <Text style={{fontSize: 14, color: colors.ORANGE.DEFAULT}}>
                PKR {item.pro_price}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderColor: colors.ORANGE.DEFAULT,
                width: '100%',
                borderWidth: 1,
                marginTop: 5,
                marginBottom: 10,
                height: 25,
              }}
              onPress={() => navigation.navigate('CheckOrder')}>
              <Text
                style={{
                  fontSize: 18,
                  color: colors.ORANGE.DEFAULT,
                  textAlign: 'center',
                }}>
                Addjj
              </Text>
            </TouchableOpacity>
            <AntDesign
              name="heart"
              style={{
                position: 'absolute',
                zIndex: 12,
                right: 10,
                top: 10,
                color: 'red',
              }}
              size={30}
            />
            <Card.Cover
              source={{uri: BASE_P_IMG_URL+item.image_name }}
              style={{height: '51%'}}
            />
            <Card.Content>
              <Paragraph
                style={{fontSize: 12, color: colors.LIGHTGREY.DEFAULT}}>
                {item.sale}
              </Paragraph>
              <Paragraph>{item.pro_name}</Paragraph>
              <Paragraph style={{fontSize: 14, color: colors.ORANGE.DEFAULT}}>
                PKR {item.pro_price}
              </Paragraph>
            </Card.Content>
            <TouchableOpacity
              style={{
                borderColor: colors.ORANGE.DEFAULT,
                width: '100%',
                borderWidth: 1,
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: colors.ORANGE.DEFAULT,
                  textAlign: 'center',
                }}>
                Add
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </SwiperFlatList>
    </View>
  );
};

const SliderTrending = () => {
  return (
    <View
      style={{
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        height: '30%',
      }}>
      <Card style={{width: '49%', marginRight: '2%'}}>
        <AntDesign
          name="hearto"
          style={{
            position: 'absolute',
            zIndex: 12,
            right: 10,
            top: 10,
            color: colors.LIGHTGREY.DEFAULT,
          }}
          size={30}
        />
        <Card.Cover source={images.trendingProduct} style={{height: '51%'}} />
        <Card.Content>
          <Paragraph style={{fontSize: 12, color: colors.LIGHTGREY.DEFAULT}}>
            Heavy
          </Paragraph>
          <Paragraph>product number 8</Paragraph>
          <Paragraph style={{fontSize: 14, color: colors.ORANGE.DEFAULT}}>
            PKR 500
          </Paragraph>
        </Card.Content>
        <TouchableOpacity
          style={{
            borderColor: colors.ORANGE.DEFAULT,
            width: '100%',
            borderWidth: 1,
            marginTop: 5,
          }}
          onPress={() => navigation.navigate('CheckOrder')}>
          <Text
            style={{
              fontSize: 18,
              color: colors.ORANGE.DEFAULT,
              textAlign: 'center',
            }}>
            Add
          </Text>
        </TouchableOpacity>
      </Card>
      <Card style={{width: '49%'}}>
        <AntDesign
          name="heart"
          style={{
            position: 'absolute',
            zIndex: 12,
            right: 10,
            top: 10,
            color: 'red',
          }}
          size={30}
        />
        <Card.Cover source={images.trendingProduct} style={{height: '51%'}} />
        <Card.Content>
          <Paragraph style={{fontSize: 12, color: colors.LIGHTGREY.DEFAULT}}>
            Heavy
          </Paragraph>
          <Paragraph>product number 8</Paragraph>
          <Paragraph style={{fontSize: 14, color: colors.ORANGE.DEFAULT}}>
            PKR 500
          </Paragraph>
        </Card.Content>
        <TouchableOpacity
          style={{
            borderColor: colors.ORANGE.DEFAULT,
            width: '100%',
            borderWidth: 1,
            marginTop: 5,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: colors.ORANGE.DEFAULT,
              textAlign: 'center',
            }}>
            Add
          </Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};


const App = () => {
  const [slidersData, setSlidersData] = React.useState([]);
  const [ShopsData, setShopsData] = React.useState([]);
  const [logo, setLogo] = React.useState('');
  const [resentProducts, setResentProducts] = React.useState([]);
  const [recommendedProducts, setRecommendedProducts] = React.useState([]);

console.log(logo)
  React.useEffect(()=>{
    server.post('api-get-slider-images.php').
    then(res => {
      if (res.data.status == '200') {
        setSlidersData(res.data.Data);
      } else {
        alert(res.data.result);
      }

      server.post('api-get-shopname.php').
      then(res => {
        setShopsData(res.data.Data);
        setLogo(res.data.vendor_logo_prepend_url);
      });

      server.post('api-get-recentproducts.php').
      then(res => {
        setResentProducts(res.data.Data);
      });

      server.post('api-get-allproductrole.php?role=recommendation').
      then(res => {
        setRecommendedProducts(res.data.Data);
      });
    }).catch(err=> alert(err));
  },[])

  let navigation = useNavigation();

  let renderItem = (item) => {
    console.log(BASE_P_IMG_URL+item.item.image_name)
    return (
      <Card
        style={{marginRight: '2%', width: '49%', height: 230, marginTop: 10}}>
        <AntDesign
          name="hearto"
          style={{
            position: 'absolute',
            zIndex: 12,
            right: 10,
            top: 10,
            color: colors.LIGHTGREY.DEFAULT,
          }}
          size={30}
        />
        <Card.Cover source={{uri: BASE_P_IMG_URL+item.item.image_name}} style={{height: '55%',width:'100%'}} />
        <Card.Content>
          <Paragraph style={{fontSize: 12, color: colors.LIGHTGREY.DEFAULT}}>
            {item.item.sale}
          </Paragraph>
          <Paragraph>{item.item.pro_name}</Paragraph>
          <Paragraph style={{fontSize: 14, color: colors.ORANGE.DEFAULT}}>
          PKR {item.item.pro_price}
          </Paragraph>
        </Card.Content>
        <TouchableOpacity
          style={{
            borderColor: colors.ORANGE.DEFAULT,
            width: '100%',
            borderWidth: 1,
            marginTop: 5,
          }}
          onPress={() => navigation.navigate('ProductDetail')}>
          <Text
            style={{
              fontSize: 18,
              color: colors.ORANGE.DEFAULT,
              textAlign: 'center',
            }}>
            Add
          </Text>
        </TouchableOpacity>
      </Card>
    );
  };
  const ShopSlider = (data) => {
    let navigation = useNavigation();
    return (
      <View >
        <SwiperFlatList
           autoplay
           autoplayDelay={3}
           index={0}
           // showPagination
           autoplayLoop
           disableGesture={false}
           autoplayLoopKeepAnimation={true}
   
           paginationActiveColor={colors.LIGHTGREY.DEFAULT}
           paginationDefaultColor={colors.TRANSPARENT}>
          {data.data.map((item, key) => (
            <React.Fragment key={key}>
            <Image
              source={{uri: logo+item.vendor_logo}}
              style={{height: 30, width: 40}}
            />
            <Text style={{color: colors.ORANGE.DEFAULT, fontSize: 14}}>
              {item.vendor_company_name}
              {/* {logo+item.vendor_logo} */}
            </Text>
          </React.Fragment>
          ))}
        </SwiperFlatList>
      </View>
    );
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <LoginModal />
      <View style={{height: '100%', backgroundColor: 'white'}}>
        <Header />
        <ScrollView nestedScrollEnabled={true} style={{height: 300}}>
          <Slider  data={slidersData} />
          <Text style={{fontSize: 20, fontWeight: 'bold', padding: 10}}>
            Shops
          </Text>
          <ShopSlider img={logo} data={ShopsData} />

          <Text style={{fontSize: 22, fontWeight: 'bold', padding: 10}}>
          Recent
          </Text>
          <Slider1 data={resentProducts} />

          <View
            style={{
              width: '96%',
              marginTop: '2%',
              // justifyContent: 'space-evenly',
              // alignItems: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold', padding: 10}}>
            Recommended 
            </Text>
            <View>
              <FlatList
              nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                data={recommendedProducts}
                keyExtractor={(i) => i}
                renderItem={renderItem}
                numColumns={2}
              />
            </View>
            
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {height: 200, backgroundColor: 'white'},
  child: {width, justifyContent: 'center'},
  text: {fontSize: 20, marginLeft: '5%', fontWeight: 'bold', color: 'white'},
});

export default App;
