import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
import './App.css';
import imageAPI from './services/imageApi/imageApi.jsx';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button';


class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    largeImage: '',
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({
        loading: true,
        page: 1,
        searchQuery: this.state.searchQuery,
        images: [],
      });
      this.searchImagesFetch();
    }
  }

  searchImagesFetch = () => {
    const { searchQuery, page } = this.state;
    imageAPI
      .fetchImage(searchQuery, page)
      .then((imagesArr) => this.checkNewFetchImages(imagesArr.hits))
      .catch((error) => this.setState({ error }))
      .finally(() =>
        this.setState((prevState) => ({
          loading: false,
          page: prevState.page + 1,
        })),
      );
  };

  checkNewFetchImages = (imagesArr) => {
    imagesArr === []
      ? this.setState({
          images: imagesArr,
        })
      : this.setState((prevState) => ({
          images: [...prevState.images, ...imagesArr],
        }));
  };

  handleFormSubmit = (searchQuery) => {
    console.log(searchQuery);
    this.setState({
      searchQuery,
      images: [],
    });
  };

  onClickLoadMore = () => {
    this.searchImagesFetch();
    this.scrollGallery();
  };

  scrollGallery = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 500)
  };

  render() {
    const { loading, error, images } = this.state;
    return (
			<div>
				{/* <ToastContainer /> */}
				{error && <h1>error.message</h1>}
				<Searchbar onSubmit={this.handleFormSubmit} />

				{loading && <Loader />}
				{images && <ImageGallery images={images} />}
				{images.length !== 0 && <Button onClick={this.onClickLoadMore} />}
			</div>
		);
  }
}

export default App;
