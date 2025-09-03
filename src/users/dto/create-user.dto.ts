export class CreateUserDto {
        _id: string;
        name: string;   
        username: string;
        email: string;
        password: string;
        biography: string;
        followers: Types.ObjectId[];
        following: Types.ObjectId[];
        reviews: Types.ObjectId[];
        reviewGrades: number;
        bookshelves: Types.ObjectId[];
        favoriteBooks: Types.ObjectId[];        
        profilePicture: string;
        totalReviews: number;
        totalFollowers: Types.ObjectId[];
        totalFollowing: Types.ObjectId[];
        joinedDate: Date;
        lastActivity: Date;
        isOnline: boolean;
        createdAt!: Date;
        updatedAt!: Date;
}
