import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  FormMemeContainer,
  MemeContainer,
  TextContent,
  MemeGeneratorForm,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  ButtonContainer,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrlInput: '',
    backgroundImageUrl: '',
    topTextInput: '',
    topText: '',
    bottomTextInput: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  onChangeBackgroundImage = event => {
    this.setState({
      backgroundImageUrlInput: event.target.value,
    })
  }

  onChangeTopTextInput = event => {
    this.setState({
      topTextInput: event.target.value,
    })
  }

  onChangeBottomTextInput = event => {
    this.setState({
      bottomTextInput: event.target.value,
    })
  }

  onChangeFontSizeOptionID = event => {
    this.setState({
      activeFontSizeOptionId: event.target.value,
    })
  }

  renderMeme = () => {
    const {
      backgroundImageUrl,
      activeFontSizeId,
      topText,
      bottomText,
    } = this.state

    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImageUrl}>
        <TextContent activeFontSizeId={activeFontSizeId}>{topText}</TextContent>
        <TextContent activeFontSizeId={activeFontSizeId}>
          {bottomText}
        </TextContent>
      </MemeContainer>
    )
  }

  memeGenerator = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      activeFontSizeOptionId,
      topTextInput,
      bottomTextInput,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
    })
  }

  renderMemeGenerator = () => {
    const {
      backgroundImageUrlInput,
      activeFontSizeOptionId,
      topTextInput,
      bottomTextInput,
    } = this.state

    return (
      <MemeGeneratorForm onSubmit={this.memeGenerator}>
        <CustomLabel htmlFor="url-input">Image URL</CustomLabel>
        <CustomInput
          id="url-input"
          type="text"
          value={backgroundImageUrlInput}
          placeholder="Enter the Image URL"
          onChange={this.onChangeBackgroundImage}
        />
        <CustomLabel htmlFor="top-text-input">Top Text</CustomLabel>
        <CustomInput
          id="top-text-input"
          type="text"
          value={topTextInput}
          placeholder="Enter the Top Text"
          onChange={this.onChangeTopTextInput}
        />
        <CustomLabel htmlFor="bottom-text-input">Bottom Text</CustomLabel>
        <CustomInput
          id="bottom-text-input"
          type="text"
          value={bottomTextInput}
          placeholder="Enter the Bottom Text"
          onChange={this.onChangeBottomTextInput}
        />
        <CustomLabel htmlFor="font-size">Font Size</CustomLabel>
        <CustomSelect
          id="font-size"
          value={activeFontSizeOptionId}
          onChange={this.onChangeFontSizeOptionID}
        >
          {fontSizesOptionsList.map(eachFont => (
            <CustomOption key={eachFont.optionId} value={eachFont.optionId}>
              {eachFont.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <ButtonContainer>
          <GenerateButton type="submit">Generate</GenerateButton>
        </ButtonContainer>
      </MemeGeneratorForm>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormMemeContainer>
            {this.renderMeme()}
            {this.renderMemeGenerator()}
          </FormMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
