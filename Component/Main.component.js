import { Col, Row } from 'antd'
import moment from 'moment';
moment.locale('id');
import BarChart from './BarChart.component'

// const BarChartComp = barChart( { data } )
// console.log(BarChartComp);
export default class Penilaian extends React.Component {
    state = {
        activeKey: undefined,
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col xs={24}>
                        <div style={{ height: 250, width: 'auto' }}>
                            <BarChart />
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}