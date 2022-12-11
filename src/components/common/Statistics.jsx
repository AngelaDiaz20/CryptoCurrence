import '../../theme/App.css';
import CardStatistics from './CardStatistics';

function Statistics() {
    return (
        <div className="statistics-section">
            <div className='layer'>
                <CardStatistics/>
                <CardStatistics/>
                <CardStatistics/>
            </div>
        </div>
    );
}

export default Statistics;