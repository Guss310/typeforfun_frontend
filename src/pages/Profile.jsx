// This is the initial code for the Profile component. It is used to display the user's profile.

// This dependencies are used in this file.
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Card, Container } from 'react-bootstrap';


// This is the main function of the Profile page.
export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
      return <div>Loading...</div>
  }

// This is the return of the Profile component.
return (
    isAuthenticated && (
      <div style={{ backgroundColor: '#e0f7fa', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ backgroundColor: '#000', minHeight: '10vh',color: '#fff', padding: '10px', textAlign: 'center' }}></div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Container style={{ maxWidth: '300px', padding: '20px', borderRadius: '10px' }}>
            <Card style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 30), 0 6px 20px rgba(0, 0, 0, 10)' }}>
              <Card.Img variant="top" src={user.picture} alt={user.name} style={{ borderRadius: '10px 10px 0 0' }} />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>{user.email}</Card.Text>
                {/* <Card.Link href="/profile/edit">Editar perfil</Card.Link> */}
              </Card.Body>
            </Card>
          </Container>
        </div>
      </div>
    )
  );
};


export default Profile;

