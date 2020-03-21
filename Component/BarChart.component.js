import { ResponsiveBar } from '@nivo/bar'
import data from './data';

export default () => <ResponsiveBar
    data={data}
    keys={['jml_keluarga_lengkap_clean']}
    indexBy="nama_kec"
    margin={{ top: 10, right: 0, bottom: 50, left: 50 }}
    padding={0.3}
    colors={{ scheme: 'red_yellow_green' }}
    colorBy="jml_keluarga_lengkap_clean"
    groupMode="grouped"
    minValue={0}
    maxValue={100}
    axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Kecamatan',
        legendPosition: 'middle',
        legendOffset: 32
    }}
    axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'KK Clean',
        legendPosition: 'middle',
        legendOffset: -40
    }}
    labelTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
    legends={[]}
    animate={true}
/>