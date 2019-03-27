import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';
import Swipe from '../components/Swipe';


class DeckScreen extends Component {

    // renderCard(jobs){
    //   return (
    //       <Card title={jobs.listings.listing.title}>
    //         <View>
    //             <Text>{job.listings.listing.company.name}</Text>
    //         </View>
    //       </Card>
    //   )
    // }


    render(){
        console.log(this.props.jobs);
        return(
            <View
            style={{
                marginTop: Platform.OS === 'android' ? 40 : 0
            }}
            >
                {/* <Swipe 
                  data={this.props.jobs}
                  renderCard={this.renderCard}
                /> */}
            </View>
        );
    }
}

const mapStateToProps = ({ jobs }) => {
   return { jobs: jobs };
}

export default connect(mapStateToProps)(DeckScreen);