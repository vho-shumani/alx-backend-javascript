import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise = uploadPhoto();
  const promise2 = createUser();

  Promise.all([promise, promise2])
    .then((values) => {
      const [photo, user] = values;
      console.log(photo.body, user.firstName, user.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
