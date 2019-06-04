import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { CounterStory, CounterInfo, ExpandableStory, ExpandableInfo } from './components/atoms';
import { ButtonStory, ButtonInfo } from './components/core';
import {
  BlockquoteStory,
  BlockquoteInfo,
  UnorderedListStory,
  UnorderedListInfo,
  OrderedListStory,
  OrderedListInfo,
  BreakoutStory,
  BreakoutInfo,
} from './components/text';
import {
  AmountInfo,
  AmountStory,
  CheckboxInfo,
  CheckboxStory,
  ColorInputStory,
  ColorInputInfo,
  DateInputStory,
  DateInputInfo,
  EmailInputStory,
  EmailInputInfo,
  InputStory,
  InputInfo,
  NumberInputStory,
  NumberInputInfo,
  PasswordInputStory,
  PasswordInputInfo,
  RadioStory,
  RadioInfo,
  RangeInputStory,
  RangeInputInfo,
  SchemaFormInfo,
  SchemaFormStory,
  SelectInfo,
  SelectStory,
  TextareaStory,
  TextareaInfo,
  TextInputStory,
  TextInputInfo,
  URLInputStory,
  URLInputInfo,
} from './components/forms';
import {
  ComplexCardStory,
  ComplexCardInfo,
  EmptyCardInfo,
  EmptyCardStory,
  SimpleCardInfo,
  SimpleCardStory,
} from './components/cards';
import { HighlightedQuoteStory, HighlightedQuoteInfo } from './components/highlightedContent';
import { GalleryStory, GalleryInfo } from './components/galleries';
import { ImageStory, ImageInfo } from './components/images';
import {
  BurgerStory,
  BurgerInfo,
  LanguagePickerStory,
  LanguagePickerInfo,
  MenuItemStory,
  MenuItemInfo,
} from './components/navigation';
import { SignupStory, SignupInfo, NewsletterStory, NewsletterInfo } from './components/signup';

const textStories = storiesOf('Text', module).addDecorator(withKnobs);
textStories.add('Breakout', withInfo(BreakoutInfo)(BreakoutStory));

const formInputStories = storiesOf('Forms/Input', module).addDecorator(withKnobs);
formInputStories.add('Input', withInfo(InputInfo)(InputStory));
formInputStories.add('Number Input', withInfo(NumberInputInfo)(NumberInputStory));
formInputStories.add('Text Input', withInfo(TextInputInfo)(TextInputStory));
formInputStories.add('Email Input', withInfo(EmailInputInfo)(EmailInputStory));
formInputStories.add('Password Input', withInfo(PasswordInputInfo)(PasswordInputStory));
formInputStories.add('URL Input', withInfo(URLInputInfo)(URLInputStory));
formInputStories.add('Date Input', withInfo(DateInputInfo)(DateInputStory));
formInputStories.add('Color Input', withInfo(ColorInputInfo)(ColorInputStory));
formInputStories.add('Checkbox Input', withInfo(CheckboxInfo)(CheckboxStory));
formInputStories.add('Range Input', withInfo(RangeInputInfo)(RangeInputStory));
formInputStories.add('Textarea', withInfo(TextareaInfo)(TextareaStory));
formInputStories.add('Select', withInfo(SelectInfo)(SelectStory));
formInputStories.add('Radio', withInfo(RadioInfo)(RadioStory));

const coreStories = storiesOf('Core', module).addDecorator(withKnobs);
coreStories.add('Button', withInfo(ButtonInfo)(ButtonStory));

const formSchemaStories = storiesOf('Forms/JSON Schema', module).addDecorator(withKnobs);
formSchemaStories.add('Schema Form', withInfo(SchemaFormInfo)(SchemaFormStory));

const formOtherStories = storiesOf('Forms/Other', module).addDecorator(withKnobs);
formOtherStories.add('Amount', withInfo(AmountInfo)(AmountStory));

const quoteStories = storiesOf('Text/Quotes', module).addDecorator(withKnobs);
quoteStories.add('Blockquote', withInfo(BlockquoteInfo)(BlockquoteStory));

const listStories = storiesOf('Text/Lists', module).addDecorator(withKnobs);
listStories.add('Unordered List', withInfo(UnorderedListInfo)(UnorderedListStory));
listStories.add('Ordered List', withInfo(OrderedListInfo)(OrderedListStory));

const highlightsStories = storiesOf('Highlighted Content', module).addDecorator(withKnobs);
highlightsStories.add('Highlighted Quote', withInfo(HighlightedQuoteInfo)(HighlightedQuoteStory));

const cardStories = storiesOf('Cards', module).addDecorator(withKnobs);
cardStories.add('Empty', withInfo(EmptyCardInfo)(EmptyCardStory));
cardStories.add('Node Complex', withInfo(ComplexCardInfo)(ComplexCardStory));
cardStories.add('Node Simple', withInfo(SimpleCardInfo)(SimpleCardStory));

const imageStories = storiesOf('Images and Galleries', module).addDecorator(withKnobs);
imageStories.add('Image', withInfo(ImageInfo)(ImageStory));
imageStories.add('Gallery', withInfo(GalleryInfo)(GalleryStory));

const navigationStories = storiesOf('Navigation', module).addDecorator(withKnobs);
navigationStories.add('Burger', withInfo(BurgerInfo)(BurgerStory));
navigationStories.add('MenuItem', withInfo(MenuItemInfo)(MenuItemStory));
navigationStories.add('Language Picker', withInfo(LanguagePickerInfo)(LanguagePickerStory));

const atomStories = storiesOf('Uncategorised', module).addDecorator(withKnobs);
atomStories.add('Counter', withInfo(CounterInfo)(CounterStory));
atomStories.add('Expandable', withInfo(ExpandableInfo)(ExpandableStory));

const signupStories = storiesOf('Signup', module).addDecorator(withKnobs);
signupStories.add('Signup', withInfo(SignupInfo)(SignupStory));
signupStories.add('Newsletter', withInfo(NewsletterInfo)(NewsletterStory));
