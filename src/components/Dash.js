import AverageRating from './AverageRating';
import Reviews from './Reviews';
import SentimentAnalysis from './SentimentAnalysis';
import Sidebar from './Sidebar';
import WebsiteVisitors from './WebsiteVisitors';

function Dash(props) {
  return (
    <div id='dashboard'>
        <AverageRating />
        <Reviews />
        <SentimentAnalysis />
        <Sidebar />
        <WebsiteVisitors />
    </div>
  );
}

export default Dash;