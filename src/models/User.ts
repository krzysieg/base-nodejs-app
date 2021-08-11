import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'user'})
export default class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: string;
}
