import React, { useState } from 'react';
import { shape, func, arrayOf, bool, string } from 'prop-types';

import Title from '../title';
import Button from '../button';
import Grid, { Row, Column } from '../grid';

import Container from './Container';

import { CookiesModalDefaultProps } from './assets/json';

function CookiesModal({
  fields = CookiesModalDefaultProps.fields,
  open = CookiesModalDefaultProps.open,
  title = CookiesModalDefaultProps.title,
  description = CookiesModalDefaultProps.description,
  acceptText = CookiesModalDefaultProps.acceptText,
  rejectText = CookiesModalDefaultProps.rejectText,
  savePreferences = CookiesModalDefaultProps.savePreferences,
  customizeText = CookiesModalDefaultProps.customizeText,
  readMoreText = CookiesModalDefaultProps.readMoreText,
  readMoreUrl = CookiesModalDefaultProps.readMoreUrl,
  acceptButtonVariant = CookiesModalDefaultProps.acceptButtonVariant,
  acceptButtonFontColor = CookiesModalDefaultProps.acceptButtonFontColor,
  acceptButtonBackgroundColor = CookiesModalDefaultProps.acceptButtonBackgroundColor,
}) {
  const [showCustomizationOptions, setShowCustomizationOptions] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState({});

  let buttonsWidth = 6;

  if (rejectText && customizeText) {
    buttonsWidth = 4;
  }

  const customizeFields = [];

  fields.forEach(({
    key,
    name,
    required,
    accepted,
  }) => {
    customizeFields.push(
      <>
        <p key={key}>
          {name}
          {/*
            <Toggle
              checked={required || accepted}
              disabled={accepted}
          */}
        </p>
      </>
    );
  });

  const processAllCookies = (operation) => {
    const cookies = [];

    fields.forEach((cookie) => {
      if (operation === 'accept') {
        cookie.accepted = true;
      } else if (operation === 'reject') {
        if (!cookie.required) {
          cookie.accepted = false;
        }
      }

      cookies.push(cookie);
    });

    savePreferences(cookies);
  };

  return (
    <Container>
      <Grid>
        {
          !showCustomizationOptions
            ? (
              <Row>
                <Column
                  extraSmall={12}
                >
                  <Title
                    type="subtitle"
                    text={title}
                  />
                </Column>
                <Row>
                  <Column
                    extraSmall={12}
                  >
                    <p className="pure-ui-cookies-modal-description">
                      {description}
                      {
                        readMoreText && readMoreUrl
                          ? (
                            <p className="pure-ui-cookies-modal-description">
                              <a href={readMoreUrl}>
                                {readMoreText}
                              </a>
                            </p>
                          )
                          : ''
                      }
                    </p>
                  </Column>
                </Row>
                <Row>
                  {
                    rejectText && (
                      <Column
                        small={12}
                        medium={buttonsWidth}
                      >
                        <Button
                          text={rejectText}
                          onClick={() => processAllCookies('reject')}
                        />
                      </Column>
                    )
                  }
                  {
                    customizeText && (
                      <Column
                        small={12}
                        medium={buttonsWidth}
                      >
                        <Button
                          text={customizeText}
                          onClick={() => setShowCustomizationOptions(true)}
                        />
                      </Column>
                    )
                  }
                  <Column
                    small={12}
                    medium={buttonsWidth}
                  >
                    <Button
                      text={acceptText}
                      onClick={() => processAllCookies('accept')}
                      variant="contained"
                      color={acceptButtonBackgroundColor}
                      fontColor={acceptButtonFontColor}
                    />
                  </Column>
                </Row>
              </Row>
            )
            : (customizeFields)
        }
      </Grid>
    </Container>
  );
}

CookiesModal.defaultProps = CookiesModalDefaultProps;
CookiesModal.propTypes = {
  fields: arrayOf(shape({
    name: string.isRequired,
    key: string.isRequired,
    required: bool,
    accepted: bool,
  })).isRequired,
};

export default CookiesModal;
