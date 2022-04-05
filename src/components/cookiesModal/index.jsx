import React, { useEffect, useState } from 'react';
import { shape, func, arrayOf, bool, string } from 'prop-types';

import Title from '../title';
import Button from '../button';
import Grid, { Row, Column } from '../grid';

import Container from './Container';

import { CookiesModalDefaultProps } from './assets/json';
import Toggle from '../toggle';

function CookiesModal({
  fields = CookiesModalDefaultProps.fields,
  open = CookiesModalDefaultProps.open,
  setOpen = CookiesModalDefaultProps.setOpen,
  title = CookiesModalDefaultProps.title,
  description = CookiesModalDefaultProps.description,
  acceptText = CookiesModalDefaultProps.acceptText,
  rejectText = CookiesModalDefaultProps.rejectText,
  savePreferences = CookiesModalDefaultProps.savePreferences,
  customizeText = CookiesModalDefaultProps.customizeText,
  customizeTitle = CookiesModalDefaultProps.customizeTitle,
  readMoreText = CookiesModalDefaultProps.readMoreText,
  readMoreUrl = CookiesModalDefaultProps.readMoreUrl,
  acceptButtonVariant = CookiesModalDefaultProps.acceptButtonVariant,
  acceptButtonFontColor = CookiesModalDefaultProps.acceptButtonFontColor,
  acceptButtonBackgroundColor = CookiesModalDefaultProps.acceptButtonBackgroundColor,
}) {
  const [showCustomizationOptions, setShowCustomizationOptions] = useState(false);
  const [fieldStatus, setFieldStatus] = useState([]);
  const [renderFields, setRenderFields] = useState([]);
  const [isOpen, setIsOpen] = useState(open);

  const assembleFields = (fieldList) => {
    const customizeFields = [];

    fieldList.forEach(({
      name,
      key = name,
      required,
      accepted,
    }, index) => {
      customizeFields.push(
        <Row
          justifyContent="flex-start"
        >
          <Column
            extraSmall={12}
            medium={8}
            justifyContent="flex-start"
          >
            <Toggle
              key={key}
              checked={required || accepted}
              disabled={required}
              onChange={() => toggleField(index)}
              text={name}
            />
          </Column>
          <Column
            extraSmall={0}
            medium={4}
          />
        </Row>,
      );

      setRenderFields(customizeFields);
    });
  };

  const toggleField = (index) => {
    const currentFields = fieldStatus;

    currentFields[index].accepted = !currentFields[index].accepted;

    setFieldStatus(currentFields);

    assembleFields(currentFields);
  };

  let buttonsWidth = 6;

  if (rejectText && customizeText) {
    buttonsWidth = 4;
  }

  useEffect(() => {
    setFieldStatus(fields);
  }, []);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useEffect(() => {
    console.log('field status', fieldStatus)
    assembleFields(fieldStatus);
  }, [fieldStatus]);

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

    if (setOpen) {
      setOpen();
    }

    setIsOpen(false);
  };

  if (!isOpen) return '';

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
                      variant={acceptButtonVariant}
                      color={acceptButtonBackgroundColor}
                      fontColor={acceptButtonFontColor}
                    />
                  </Column>
                </Row>
              </Row>
            )
            : (
              <>
                <Row>
                  <Column
                    extraSmall={12}
                    medium={8}
                  >
                    <Title
                      type="h2"
                      text={customizeTitle}
                    />
                  </Column>
                  <Column
                    extraSmall={0}
                    medium={4}
                  />
                </Row>
                {renderFields}
              </>
            )
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
  open: bool,
  title: string,
  description: string,
  acceptText: string,
  rejectText: string,
  savePreferences: func.isRequired,
  customizeText: string,
  customizeTitle: string,
  readMoreText: string,
  readMoreUrl: string,
  acceptButtonVariant: string,
  acceptButtonFontColor: string,
  acceptButtonBackgroundColor: string,
};

export default CookiesModal;
