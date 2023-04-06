import React, { useEffect, useState } from 'react';
import {
  shape, func, arrayOf, bool, string,
} from 'prop-types';

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
  acceptButtonText = CookiesModalDefaultProps.acceptButtonText,
  acceptButtonVariant = CookiesModalDefaultProps.acceptButtonVariant,
  acceptButtonFontColor = CookiesModalDefaultProps.acceptButtonFontColor,
  acceptButtonColor = CookiesModalDefaultProps.acceptButtonColor,
  rejectButtonText = CookiesModalDefaultProps.rejectButtonText,
  rejectButtonVariant = CookiesModalDefaultProps.rejectButtonVariant,
  rejectButtonColor = CookiesModalDefaultProps.rejectButtonColor,
  rejectButtonFontColor = CookiesModalDefaultProps.rejectButtonFontColor,
  confirmChoicesButtonText = CookiesModalDefaultProps.confirmChoicesButtonText,
  confirmChoicesButtonColor = CookiesModalDefaultProps.confirmChoicesButtonColor,
  confirmChoicesButtonFontColor = CookiesModalDefaultProps.confirmChoicesButtonFontColor,
  customizeSettingsTitle = CookiesModalDefaultProps.customizeButtonTitle,
  customizeButtonText = CookiesModalDefaultProps.customizeButtonText,
  readMoreText = CookiesModalDefaultProps.readMoreText,
  readMoreUrl = CookiesModalDefaultProps.readMoreUrl,
  savePreferences = CookiesModalDefaultProps.savePreferences,
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

  if (rejectButtonText && customizeButtonText) {
    buttonsWidth = 4;
  }

  useEffect(() => {
    setFieldStatus(fields);
  }, []);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useEffect(() => {
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
                    rejectButtonText && (
                      <Column
                        small={12}
                        medium={buttonsWidth}
                      >
                        <Button
                          text={rejectButtonText}
                          variant={rejectButtonVariant}
                          color={rejectButtonColor}
                          fontColor={rejectButtonFontColor}
                          onClick={() => processAllCookies('reject')}
                        />
                      </Column>
                    )
                  }
                  {
                    customizeButtonText && (
                      <Column
                        small={12}
                        medium={buttonsWidth}
                      >
                        <Button
                          text={customizeButtonText}
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
                      text={acceptButtonText}
                      onClick={() => processAllCookies('accept')}
                      variant={acceptButtonVariant}
                      color={acceptButtonColor}
                      fontColor={acceptButtonFontColor}
                    />
                  </Column>
                </Row>
              </Row>
            ) : (
              <>
                <Row>
                  <Column
                    extraSmall={12}
                    medium={8}
                  >
                    <Title
                      type="h2"
                      text={customizeSettingsTitle}
                    />
                  </Column>
                  <Column
                    extraSmall={0}
                    medium={4}
                  />
                </Row>
                {renderFields}
                <Row>
                  <Column
                    extraSmall={4}
                  >
                    <Button
                      text={rejectButtonText}
                      variant={rejectButtonVariant}
                      color={rejectButtonColor}
                      fontColor={rejectButtonFontColor}
                      onClick={() => processAllCookies('reject')}
                    />
                  </Column>
                  <Column
                    extraSmall={4}
                  >
                    <Button
                      text={acceptButtonText}
                      onClick={() => processAllCookies('accept')}
                      variant={acceptButtonVariant}
                      color={acceptButtonColor}
                      fontColor={acceptButtonFontColor}
                    />
                  </Column>
                  <Column
                    extraSmall={4}
                  >
                    <Button
                      text={confirmChoicesButtonText}
                      onClick={() => processAllCookies()}
                      variant={acceptButtonVariant}
                      color={confirmChoicesButtonColor}
                      fontColor={confirmChoicesButtonFontColor}
                    />
                  </Column>
                </Row>
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
  acceptButtonText: string,
  acceptButtonVariant: string,
  acceptButtonFontColor: string,
  acceptButtonColor: string,
  rejectButtonText: string,
  rejectButtonVariant: string,
  rejectButtonColor: string,
  rejectButtonFontColor: string,
  savePreferences: func.isRequired,
  customizeButtonText: string,
  confirmChoicesButtonText: string,
  customizeSettingsTitle: string,
  readMoreText: string,
  readMoreUrl: string,
  setOpen: bool,
  confirmChoicesButtonColor: string,
  confirmChoicesButtonFontColor: string,
};

export default CookiesModal;
