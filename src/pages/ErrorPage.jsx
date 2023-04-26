// error page
import React from "react";
import { Link } from "react-router-dom";
import {
  ErrorPageContainer,
  ErrorPageTitle,
  ErrorPageText,
  ErrorPageButton,
} from "./ErrorPage.styles";

export default function ErrorPage() {
  const error = {
    title: "404",
    description: "Page not found",
    button: "Go to home page",
  };

  return (
    <ErrorPageContainer className="error-page">
      <ErrorPageContainer className="error-page__content">
        <ErrorPageTitle className="error-page__title">
          {error.title}
        </ErrorPageTitle>
        <ErrorPageText className="error-page__description">
          {error.description}
        </ErrorPageText>
        <Link to="/" className="error-page__button">
          <ErrorPageButton>{error.button}</ErrorPageButton>
        </Link>
      </ErrorPageContainer>
    </ErrorPageContainer>
  );
}
