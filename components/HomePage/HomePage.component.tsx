import { BarChart } from "@analytics/components/BarChart";
import { LineChart } from "@analytics/components/LineChart";
import { SalesReport } from "@store/components/SalesReport";
import { Col, DatePicker, Row, Typography } from "antd";
import { HomePageProps } from "./HomePage.d";
// import styles from './HomePage.module.scss';

export const HomePageComponent = ({ dates, setDates }: HomePageProps) => {
    const dateRange = dates ? { startDate: dates[0], endDate: dates[1] } : {};

    return <div>
        <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography.Title level={2} style={{ margin: 0 }}>Analytics Dashboard</Typography.Title>
            <DatePicker.RangePicker
                onChange={(_dates, dateStrings) => setDates(dateStrings[0] && dateStrings[1] ? [dateStrings[0], dateStrings[1]] : null)}
            />
        </div>
        <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}><LineChart options={{ dimension: 'day', ...dateRange }} label="Daily Visitors" /></Col>
            <Col xs={24} lg={12}><LineChart options={{ dimension: 'week', ...dateRange }} label="Weekly Visitors" /></Col>
            <Col xs={24} lg={12}><LineChart options={{ dimension: 'month', ...dateRange }} label="Monthly Visitors" /></Col>
            <Col xs={24} lg={12}><LineChart options={{ dimension: 'dayOfWeek', ...dateRange }} label="Day of Week Visitors" /></Col>
            <Col xs={24} lg={12}><LineChart options={{ dimension: 'timeOfDay', ...dateRange }} label="Time of Day Visitors" /></Col>
            <Col xs={24} lg={12}><BarChart options={{ dimension: 'country', ...dateRange }} label="Country Visitors" /></Col>
            <Col xs={24} lg={12}><BarChart options={{ dimension: 'page', ...dateRange }} label="Page Visitors" /></Col>
            <Col xs={24} lg={12}><BarChart options={{ dimension: 'referrer', ...dateRange }} label="Referrer Visitors" /></Col>
        </Row>
        <SalesReport />
    </div>;
}
