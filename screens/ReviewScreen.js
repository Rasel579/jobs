import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { MapView } from 'expo';
import { connect } from 'react-redux';


class ReviewScreen extends Component {
    
    static navigationOptions = ({navigation}) => {
           return  { 
                 headerTitle: `Review Jobs`,
                 headerBackTitle: 'A much too long text for back button from B to A',
                 headerTruncatedBackTitle: 'Back',
                 headerRight: (
                     <Button 
                     title="Settings" 
                     onPress={() => navigation.navigate('settings')}  
                      type='outline'
                     />
                 ),
                 
       }
    };

    renderLikedJobs(){
        return this.props.likes.map(job => {
            const { company, post_date, url, title, id } = job;
            const initialRegion = {
                longitude: company.location.longitude,
                latitude: company.location.latitude,
                latitudeDelta: 0.045,
                longitudeDelta: 0.02
            }
            return(
                <Card title={title} key={id}>
                    <View style={{ height: 200 }}>
                    <MapView 
                      style={{ flex: 1}}
                      cacheEnabled={Platform.OS === 'android'}
                      scrollEnabled={false}
                      initialRegion={initialRegion}
                    />
                         <View style={styles.detailWrapper}>
                             <Text style={styles.italics}>{company.name}</Text>
                             <Text style={styles.italics}>{post_date}</Text>
                         </View>
                    </View>
                    <Button 
                      title='Apply Now'
                      backgroundColor='#03A9F4'
                      onPress={() => Linking.openURL(url)}
                    />
                </Card>
            );
        })
    }

    render(){
        return(
           <ScrollView>
               {this.renderLikedJobs()}
           </ScrollView>
        );
    }
}

const styles = {
   detailWrapper: {
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10
   },
   italics: {
       fontStyle: 'italic'
   }
}

const mapStateToProps = (state) => {
   return {
       likes: state.likes
   }
}

export default connect(mapStateToProps)(ReviewScreen); 