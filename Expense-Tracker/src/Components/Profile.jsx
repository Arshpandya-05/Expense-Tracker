import React from 'react';

const UserProfile = () => {
  return (
    <div style={styles.container}>
      <div style={styles.profileImage} />
      <h2 style={styles.welcomeText}>Welcome User</h2>

      <div style={styles.card}>
        <p><strong>Name :</strong> Full Name</p>
        <p><strong>Email ID :</strong> Example@gmail.com</p>
        <p><strong>Mobile Number :</strong> 9999999999</p>
        <p><strong>Net Balance :</strong> $ 15,000</p>
        <p><strong>Download your Data From Hear...</strong></p>
        <p><strong>Log Out</strong></p>

        <button style={styles.button}>Edit Personal Information</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '40px',
    fontFamily: 'Arial, sans-serif'
  },
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundColor: '#d3d3d3',
    margin: '0 auto 10px'
  },
  welcomeText: {
    marginBottom: '20px'
  },
  card: {
    backgroundColor: '#d3d3d3',
    padding: '20px',
    borderRadius: '10px',
    width: '350px',
    margin: '0 auto',
    textAlign: 'left',
    lineHeight: '1.8'
  },
  button: {
    backgroundColor: '#a37777',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    display: 'block',
    margin: '20px auto 0'
  }
};

export default UserProfile;
