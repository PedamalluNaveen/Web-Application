import { DatabaseType } from "typeorm";

//import { Lead } from "./Lead";
export class LeadView {
  id: string;
  date: string;
  name: string;
  totalexp: string;
  phoneNumber: string;
  email: string;
  status: string;
  classestaken: string;
  ratings: Number;
  timeslots: string;
  leadId: string;
  slots: string;
  classesTaken: number;
  leadType: Number;
  cosmos_ref: string;
  type: string;
  batchCode: string;
  studentID: string;
  dob: string | Date;
  whatsapp: string;
  address: string;
  classType: string;
  payments: string;
  age: string;
  startDate: string;
  startLesson: string;
  pfirstName: string;
  plastName: string;
  course: string;
  comments: string;
  alternativeMobile: string;
  paymentid: string;
  downpayment: string;
  subscription: string;
  subscriptionNo: string;
  emi: string;
  emiMonths: string;
  paymentMode: string;
  dateofsale: string;
  classessold: string;
  saleamount: string;
  plantype: string;
  studentId: string;
  Id: string;
  firstName: string;
  lastName: string;
  teacherName: string;
  days: string;
  studentType: string;
  firstFeedback: string;
  classesStartDate: string | Date;
  callStatus: string;
  callBackon: string;
  bdaName: string;
  bdmName: string;
  poc: string;
  courseFrequency: string;
  timings: string;
  customerEmail: string;
  state: string;
  zoomLink: string;
  zoomInfo: string;
  prm_id: string;
  prm_firstName: string;
  prm_lastName: string;
  salestatus: string;
  salesowner: string;
  prm: string;
  waMessageSent: string;
  salesDataFilled: string;
  isSibling?: boolean;
  lsq_user_id: string;
  lsq_user_name: string;
  batchesHistory?: { batchNumber: string }[];
  whatsappLink: string;

  public constructor(id:string, leadId:string, date:string,name:string,experience:string, mobile:string,email:string,status:string,classestaken:number,
      ratings:number,slots:string,leadType:number, type:string, batchCode:string,   studentID:string, dob?:string|Date, whatsapp?: string, address?: string, 
      classType?: string, 
      payments?: string, age?: string, startDate?: string, startLesson?: string, pfirstName?: string, plastName?: string, course?: string, 
      comments?: string, alternativeMobile?: string, paymentid?: string,  firstName?:string, lastName?:string, teacherName?: string, days?: string, 
      studentType?: string, firstFeedback?: string, classesStartDate?: string | Date, callStatus?: string, callBackon?: string, bdaName?: string, bdmName?: 
      string, poc?: string, courseFrequency?: string, timings?: string, customerEmail?: string, state?: string, zoomLink?: string, zoomInfo?: string,
    prm_id?: string, prm_firstName?: string, prm_lastName?: string, salestatus?: string, salesowner?: string, prm?: string, waMessageSent?: string, salesDataFilled?: string, lsq_user_id?: string, lsq_user_name?: string, whatsappLink?: string) {
    this.id = id;
    this.leadId = leadId;
    this.date = date;
    this.totalexp = experience;
    this.phoneNumber = mobile;
    this.email = email;
    this.status = status;
    this.classesTaken = classestaken;
    this.ratings = ratings;
    this.slots = slots;
    this.slots = slots;
    this.type = type;
    this.leadType = leadType;
    this.name = name;
    this.batchCode = batchCode;
    this.studentID = studentID;
    this.dob = dob;
    this.whatsapp = whatsapp;
    this.address = address;
    this.classType = classType;
    this.payments = payments;
    console.log(payments);
    if (Array.isArray(payments)) {
      console.log("in side payments");
      this.paymentid = payments.map(p => p.paymentid).join(',');
      this.downpayment = payments.map(p => p.downpayment).join(',');
      this.classessold = payments.map(p => p.classessold).join(',');
      this.saleamount = payments.map(p => p.saleamount).join(',');
      this.plantype = payments.map(p => p.plantype).join(',');
      this.studentId = payments.map(p => p.studentId).join(',');
      this.subscription = payments.map(p => p.subscription).join(',');
      this.subscriptionNo = payments.map(p => p.subscriptionNo).join(',');
      this.emi = payments.map(p => p.emi).join(',');
      this.emiMonths = payments.map(p => p.emiMonths).join(',');
      this.paymentMode = payments.map(p => p.paymentMode).join(',');
      this.dateofsale = payments.map(p => p.dateofsale).join(',');
    }
    this.age = age;
    this.startDate = startDate;
    this.startLesson = startLesson;
    this.pfirstName = pfirstName;
    this.plastName = plastName;
    this.course = course;
    this.comments = comments;
    this.alternativeMobile = alternativeMobile;
    this.firstName = firstName;
    this.lastName = lastName;
    this.teacherName = teacherName;
    this.days = days;
    this.studentType = studentType;
    this.firstFeedback = firstFeedback;
    this.classesStartDate = classesStartDate;
    this.callStatus = callStatus;
    this.callBackon = callBackon;
    this.bdaName = bdaName;
    this.bdmName = bdmName;
    this.poc = poc;
    this.courseFrequency = courseFrequency;
    this.timings = timings;
    this.customerEmail = customerEmail;
    this.state = state;
    this.zoomLink = zoomLink;
    this.zoomInfo = zoomInfo;
    this.prm_id = prm_id,
      this.prm_firstName = prm_firstName;
    this.prm_lastName = prm_lastName;
    this.salestatus = salestatus;
    this.salesowner = salesowner;
    this.prm = prm;
    this.waMessageSent = waMessageSent;
    this.salesDataFilled = salesDataFilled;
    this.lsq_user_id = lsq_user_id;
    this.lsq_user_name = lsq_user_name;
    this.whatsappLink = whatsappLink;
  }
}