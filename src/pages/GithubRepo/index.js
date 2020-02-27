import React from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

function GithubRepo({ navigation }) {
  const repository = navigation.getParam('starred');
  return <WebView source={{ uri: repository.html_url }} style={{ flex: 1 }} />;
}

GithubRepo.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('starred').name,
});

GithubRepo.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

export default GithubRepo;
