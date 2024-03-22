export class User {
  constructor(props) {
    const { id, fullname, username, email, dob, gender, favorite } = props;
    this.id = id;
    this.fullname = fullname;
    this.username = username;
    this.email = email;
    this.birthDate = dob;
    this.gender = gender ? 'Male' : 'Female';
    this.favorite = favorite;
  }
}
