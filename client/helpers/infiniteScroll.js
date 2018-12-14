// Reference: https://stackoverflow.com/questions/23961566/javascript-infinite-scroll-inside-a-div

export default function infiniteScroll({ container, scope, loadMore }) {
  container.onscroll = () => {
    const {
      props: { error, dispatch, is_loading_cats, loaded_max_cats }
    } = scope;
    // Bails early if:
    // * there's an error
    // * it's already loading
    // * there's nothing left to load

    if (error || is_loading_cats || loaded_max_cats) return;
    // Checks that the page has scrolled to the bottom
    var scrollY = container.scrollHeight - container.scrollTop;
    var height = container.offsetHeight;
    var offset = height - scrollY;

    if (offset == 0 || offset == 1) {
      dispatch(loadMore());
    }
  };
}
