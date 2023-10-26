import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AboutUs.css'; // Import the CSS file

const creatorsData = [
    {
      id: 1,
      name: 'Kruttika Abhyankar',
      description: 'desc',
      image: 'path_to_image_creator_1.jpg',
    },
    {
      id: 2,
      name: 'Jay Ajmera',
      description: 'Description of Creator 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'path_to_image_creator_2.jpg',
    },
    {
      id: 3,
      name: 'Chirag Chaudhary',
      description: 'Description of Creator 3. Lrem  dolor sit amet, consectetur adipiscing elit.',
      image: 'path_to_image_creator_3.jpg',
    },
    {
      id: 4,
      name: 'Ninad Khasale',
      description: 'Description of Creator 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'path_to_image_creator_4.jpg',
    },
  ];

const CreatorsPage = () => {
  return (
    <div className="container mt-5">
      <h1>Meet the Creators</h1>
      <Row className="mt-4">
        {creatorsData.map(creator => (
          <div key={creator.id} className="col-md-3 mb-4">
            <Card>
              <Card.Img variant="top" src={creator.image} alt={`Image of ${creator.name}`} />
              <Card.Body>
                <Card.Title>{creator.name}</Card.Title>
                <Card.Text>{creator.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default CreatorsPage;
