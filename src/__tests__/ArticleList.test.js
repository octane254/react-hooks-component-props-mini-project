import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ArticleList from "../components/ArticleList";

const testPosts = [
  {
    id: 1,
    title: 'Components 101',
    date: 'December 15, 2020',
    preview: 'Setting up the building blocks of your site',
    minutes: 5
  },
  {
    id: 2,
    title: 'React Data Flow',
    date: 'December 11, 2020',
    preview: 'Passing props is never passé',
    minutes: 15
  }
];

test("renders all articles with unique keys", () => {
  render(<ArticleList posts={testPosts} />);
  
  // Get all rendered articles
  const articles = screen.getAllByRole('article');
  
  // Extract the IDs from the testPosts
  const ids = testPosts.map(post => post.id.toString()); // Convert to string for comparison
  
  // Check if each article has a unique key
  articles.forEach(article => {
    const articleId = article.dataset.testid; // Get the ID from data-testid
    expect(ids).toContain(articleId); // Check if the ID is in the list of expected IDs
  });
});
