import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn, Double, BaseEntity, OneToMany } from "typeorm";
import { Status } from "./Status";
import { Nationality } from "./Nationality";
import { User } from "./User";
import { TeacherAvailability } from "./TeacherAvailability";

@Entity("teacher")
export class Teacher extends BaseEntity {
    Teacher() { }
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({ 'nullable': true, type: "text" })
    qualification: string;
    @Column({ 'nullable': true, type: "double" })
    totalexp: Double;
    @Column({ 'nullable': true, type: "text" })
    resume: string;
    @Column({ 'nullable': true, type: "text" })
    certificates: string;
    @Column({ 'nullable': true, type: "text" })
    video: string;

    @Column({ 'nullable': true, type: "date" })
    joiningdate: Date;

    @Column({ 'nullable': true })
    ratings: number;
    @Column({ 'nullable': true })
    classestaken: number;

    @Column({ 'nullable': true })
    teachertype: string;

    @CreateDateColumn()
    @Column({ 'nullable': true, type: "datetime" })
    created_at: Date

    @UpdateDateColumn()
    @Column({ 'nullable': true, type: "datetime" })
    updated_at: Date

    @OneToMany(() => TeacherAvailability, teacherAvailability => teacherAvailability.teacher)
    teacherAvailability: TeacherAvailability[];

}
