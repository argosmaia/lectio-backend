import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import crypto from 'crypto';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
    @Prop({ default: () => crypto.randomUUID() })
    _id: string;

    @Prop()
    name: string;
    
    @Prop()
    username: string;
    
    @Prop()
    email: string;
    
    @Prop()
    password: string;
    
    @Prop()
    biography: string;
    
    @Prop()
    followers: Types.ObjectId[];
    
    @Prop()
    following: Types.ObjectId[];
    
    @Prop()
    reviews: Types.ObjectId[];
    
    @Prop()
    reviewGrades: number;
    
    @Prop()
    bookshelves: Types.ObjectId[];
    
    @Prop()
    favoriteBooks: Types.ObjectId[];
    
    @Prop()
    profilePicture: string;
    
    @Prop()
    totalReviews: number;
    
    @Prop()
    totalFollowers: Types.ObjectId[];
    
    @Prop()
    totalFollowing: Types.ObjectId[];
    
    @Prop()
    joinedDate: Date;
    
    @Prop()
    lastActivity: Date;
    
    @Prop()
    isOnline: boolean;
    
    @Prop()
    createdAt!: Date;
    
    @Prop()
    updatedAt!: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);