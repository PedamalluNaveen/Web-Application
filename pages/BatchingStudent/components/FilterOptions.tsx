import React, { useEffect } from 'react';
import { Col, Row, Form, Input, Button, Select } from 'antd';

import {
    timeISTToLocalTimezone, timeToUTCTimezone, timeUTCToISTTimezone, timeToLocalTimezone, getLessonByID
} from "@/services/ant-design-pro/helpers";
import frequencyList from "./../../../../data/frequency.json";
import coursesType from "./../../../../data/coursesType.json";
import { LESSONS } from "./../../../../config/lessons";

export type Props = {
    data: any;
    setData: (data: any) => any;
    reload: () => any;
    filterTheme?: string;
    currentBatch?: any;
    excludedTeacher?: string;
    setExcludedTeacher?: (id: string) => any;
    filterCallBack?: (data: any) => any;
};

const { Option } = Select;

const FilterOptions: React.FC<Props> = ({ data, setData, reload, filterTheme, currentBatch, setExcludedTeacher, excludedTeacher, filterCallBack }) => {
    const rebatching = filterTheme == "RE_BATCHING";
    const { timings, startLesson, dob, courseFrequency, startDate, course, age, id } = data
    const [form] = Form.useForm();

    const handleFinish = () => {
        const finalData = { ...data, ...form.getFieldsValue(), timings: timeUTCToISTTimezone(timeToUTCTimezone(form.getFieldValue('timings'))) };
        setData(finalData)
        if (filterCallBack) {
            filterCallBack(finalData)
        }
    }

    useEffect(() => {
        form.setFieldsValue({ timings: timeISTToLocalTimezone(timings), startLesson, dob, courseFrequency, startDate, course, age });
        reload();
    }, [id]);

    const inputSpanEight = rebatching ? 24 : 8;
    const inputSpanSmall = rebatching ? 24 : 6;
    const inputSpanTiny = rebatching ? 24 : 4;

    const formInputs = (
        <Row gutter={rebatching ? 4 : 16}>
            <Col span={inputSpanEight}>
                <Form.Item name="course">
                    <Select style={{ width: 100 + "%" }} placeholder={"Course"}>
                        {
                            coursesType.map(c => <Option key={c.value} value={c.value}>{c.label}</Option>)
                        }
                    </Select>
                </Form.Item>
            </Col>
            <Col span={inputSpanEight}>
                <Form.Item name="timings" rules={[{ pattern: /^[0-9]{2}\:[0-9]{2}$/, message: "Make Sure To Write Correct Time" }]}>
                    <Input
                        name="timings"
                        placeholder="Timing Availability"
                    />
                </Form.Item>
            </Col>
            <Col span={inputSpanEight}>
                <Form.Item name="courseFrequency">
                    <Select style={{ width: 100 + "%" }} placeholder={"Course Frequency"}>
                        {
                            frequencyList.map(c => <Option key={c.value} value={c.value}>{c.label}</Option>)
                        }
                    </Select>
                </Form.Item>
            </Col>
            <Col span={inputSpanEight}>
                <Form.Item name="startLesson">
                    <Select style={{ width: 100 + "%" }} placeholder={"Start Lesson"} showSearch>
                        {
                            LESSONS.map(c => <Option key={`Lesson ${c.number}`} value={`Lesson ${c.number}`}>Lesson {c.number}</Option>)
                        }
                    </Select>
                </Form.Item>
            </Col>
            {age == null && String(age).length > 0 ? (
                <Col span={inputSpanSmall}>
                    <Form.Item name="age" >
                        <Input disabled placeholder={"Age"} />
                    </Form.Item>
                </Col>
            ) : (
                <Col span={inputSpanSmall}>
                    <Form.Item name="age" >
                        <Input prefix="Age :" disabled placeholder={"Age"} />
                    </Form.Item>
                </Col>
            )}
            <Col span={inputSpanSmall}>
                <Form.Item name="startDate">
                    <Input
                        name="startDate"
                        type="date"
                        placeholder="Start Date"
                    />
                </Form.Item>
            </Col>
            {
                !rebatching && (
                    <Col span={inputSpanSmall}>
                        <Form.Item name="dob">
                            <Input
                                name="dob"
                                type="date"
                                placeholder="Date Of Birth"
                            />
                        </Form.Item>
                    </Col>
                )
            }
            {rebatching && (
                <Col span={inputSpanEight}>
                    <Form.Item>
                        <Select onChange={setExcludedTeacher} style={{ width: 100 + "%" }} defaultValue={excludedTeacher} placeholder={"Teacher Change Preferred"}>
                            <Option value={currentBatch?.teacherId}>Yes</Option>
                            <Option value={0}>No</Option>
                        </Select>
                    </Form.Item>
                </Col>
            )}
            <Col span={inputSpanTiny}>
                <Button type="primary" htmlType="submit" block>
                    {rebatching ? "Update Preferred Batch Details" : "Filter"}
                </Button>
            </Col>
        </Row>
    )

    const rebatchingInputs = (
        <Row gutter={16}>
            <Col span={12}>
                <h2>Current Batch Details</h2>
                <Row gutter={[6, 25]}>
                    <Col span={6}>
                        <h3>Type: </h3>
                    </Col>
                    <Col span={18}>
                        {currentBatch ? data.course : "NA"}
                    </Col>
                    <Col span={6}>
                        <h3>Time: </h3>
                    </Col>
                    <Col span={18}>
                        {currentBatch ? timeToLocalTimezone(currentBatch.lessonStartTime) : "NA"}
                    </Col>
                    <Col span={6}>
                        <h3>Frequency: </h3>
                    </Col>
                    <Col span={18}>
                        {currentBatch ? currentBatch.frequency : "NA"}
                    </Col>
                    <Col span={6}>
                        <h3>Level: </h3>
                    </Col>
                    <Col span={18}>
                        {currentBatch ? getLessonByID(currentBatch.activeLessonId)?.number || getLessonByID(currentBatch.startingLessonId)?.number : "NA"}
                    </Col>
                    <Col span={6}>
                        <h3>Start Date: </h3>
                    </Col>
                    <Col span={18}>
                        {currentBatch ? currentBatch.classStartDate?.split("T")[0] : "NA"}
                    </Col>
                    <Col span={6}>
                        <h3>Teacher: </h3>
                    </Col>
                    <Col span={18}>
                        {currentBatch ? `${currentBatch.teacher?.firstName || "NA"} ${currentBatch.teacher?.lastName}` : "NA"}
                    </Col>
                </Row>
            </Col>
            <Col span={12}>
                <h2>Preferred Batch Details</h2>
                {formInputs}
            </Col>
        </Row>
    )

    return (
        <Form form={form} onFinish={handleFinish}>
            {!rebatching && formInputs}
            {rebatching && rebatchingInputs}
        </Form>
    )
}

export default FilterOptions;