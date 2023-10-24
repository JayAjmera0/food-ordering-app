import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const creatorsData = [
    {
      id: 1,
      name: 'Creator 1',
      description: 'Description of Creator 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'path_to_image_creator_1.jpg',
    },
    {
      id: 2,
      name: 'Creator 2',
      description: 'Description of Creator 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'path_to_image_creator_2.jpg',
    },
    {
      id: 3,
      name: 'Creator 3',
      description: 'Description of Creator 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'path_to_image_creator_3.jpg',
    },
    {
      id: 4,
      name: 'Creator 4',
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
