
const fetch = () => {
    console.log('fetching data...')
}

const getNewsFeed = (delay) => {
    let timer;
    const newsFeed = () => {
        clearTimeout(timer);
        timer = setTimeout(fetch, delay);
    };
    return newsFeed;
};

const getNewsFeedWithDebounce = getNewsFeed(400);