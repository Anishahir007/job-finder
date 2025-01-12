import mongoose from 'mongoose';

// create schrma------------

const UserSchema = mongoose.Schema({
    // common fields for all roles
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "recruiter", "jobseeker"],
    },
  
    //   common fields end for all roles
    // now we have role based fields
  
    jobseeker: {
      education: [
        {
          degree: {
            type: String,
          },
          institution: {
            type: String,
          },
          year: {
            type: Number,
          },
        },
      ],
      experience: [
        {
          companyName: {
            type: String,
          },
          designation: {
            type: String,
          },
          duration: {
            type: String,
          },
        },
      ],
      skills: {
        type: [String],
      },
      resume: {
        type: String,
      },
    },
  
    recruiter: {
      companyName: {
        type: String,
      },
      companyWebsite: {
        type: String,
      },
    },
  });

  UserSchema.pre('save', (next) =>{
   
        if(this.role === 'jobseeker'){
            this.recruiter = undefined;
            next()
        }

        if(this.role === 'recruiter'){
            this.jobseeker = undefined;
            next()
        }

})



  const User = mongoose.model('User' , UserSchema);

  export default User;