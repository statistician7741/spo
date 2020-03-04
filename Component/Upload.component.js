import { Button, Icon, message, Upload } from 'antd'
import moment from 'moment';
moment.locale('id');

export default class Penilaian extends React.Component {
    state = {
        activeKey: undefined,
    }

    onChangeUpload = (info)=>{
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }

    render() {
        return (
            <React.Fragment>
                <Upload
                    name="dataspo"
                    action="/api/spo/upload"
                    multiple={false}
                    onChange={this.onChangeUpload}
                >
                    <Button>
                        <Icon type="upload" /> Upload
                            </Button>
                </Upload>
            </React.Fragment>
        )
    }
}