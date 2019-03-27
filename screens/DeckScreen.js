import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button, Icon } from 'react-native-elements';
import Swipe from '../components/Swipe';
import * as actions from '../actions';


class DeckScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return { title: 'Jobs',
                  tabBarIcon: ({ tintColor }) => {
                     return <Icon name="description" size={30} color={tintColor} />
                  }
     }
     };

    renderCard(jobs){
        const initialRegion = {
            longitude: jobs.company.location.longitude,
            latitude: jobs.company.location.latitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        }
      return (
          <Card title={jobs.title}>
           <View style={{ height: 300 }}>
            <MapView
                scrollEnabled={false}
                style={{ flex: 1 }}
                cacheEnabled={Platform.OS === 'android' ? true : false}
                initialRegion={initialRegion}
                >
             </MapView>  
           </View>  
            <View style={styles.detailWraper}>
                <Text>{jobs.company.name}</Text>
                <Text>{jobs.post_date}</Text>
            </View>
            <Text>
                {jobs.keywords}
            </Text>
          </Card>
      )
    }
   renderNoMoreCards = () => {
       return (
           <Card title="No More Jobs">
                <Button
                 title='Back To Map'
                 large
                 icon={{name: 'my-location'}}
                 backgroundColor="#03A94"
                 onPress={() => this.props.navigation.navigate('map')}
                />
           </Card>
       );
   }

    render(){
        console.log(this.props.jobs);
        return(
            <View
            style={{
                marginTop: Platform.OS === 'android' ? 40 : 0
            }}
            >
                <Swipe 
                  data={this.props.jobs}
                  renderCard={this.renderCard}
                  renderNoMoreCards={this.renderNoMoreCards}
                  onSwipeRight={job => this.props.likedJob(job)}
                />
            </View>
        );
    }
}

const styles = {
    detailWraper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    }
}

const mapStateToProps = ({ jobs }) => {
   return { jobs: jobs };
}

export default connect(mapStateToProps, actions)(DeckScreen);