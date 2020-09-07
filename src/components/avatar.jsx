import md5 from 'md5';

const UserAvatar = (email) => {
  console.log({ email });
  if (email) {
    const hash = md5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${hash}?d=robohash&s=200`;
  }
};

export default UserAvatar;
