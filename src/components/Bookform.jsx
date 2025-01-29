import React from "react";
import { Form, Button, Container } from "react-bootstrap";

export const Bookform = () => {
  return (
    <Container className="mt-4">
      <h2>Add a Book</h2>
      <Form
      //   onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            // value={formData.title}
            // onChange={handleChange}
            placeholder="Enter book title"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            name="author"
            // value={formData.author}
            // onChange={handleChange}
            placeholder="Enter author's name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            // value={formData.description}
            // onChange={handleChange}
            rows={3}
            placeholder="Enter a short description"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Cover Image URL</Form.Label>
          <Form.Control
            type="url"
            name="coverImage"
            // value={formData.coverImage}
            // onChange={handleChange}
            placeholder="Enter cover image URL"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
