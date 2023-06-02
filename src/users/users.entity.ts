import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;
  custom_id: number;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  time_zone: string;
  @Column()
  enabled: number; //capire come definire un intero più piccolo
  @Column()
  latest_access: string; //capire come definire una data
  @Column()
  activation_token: string;
  @Column()
  activation_token_date: string; //idem data
  @Column()
  reset_password_token: string;
  @Column()
  reset_password_token_date: string; //idem data
  @Column()
  tenantOprationalOfficeId: number;
  @Column()
  roleId: number;
}
