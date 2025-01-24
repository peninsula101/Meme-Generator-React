import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  FormAndMemeContainer,
  MemeContainer,
  TextContent,
  MemeGeneratorForm,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
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

const differentColorsList = [
  {
    colorId: 'White',
    colorHex: '#ffffff',
  },
  {
    colorId: 'Lavender',
    colorHex: '#E6E6FA',
  },
  {
    colorId: 'Fuchsia',
    colorHex: '#FF00FF',
  },
  {
    colorId: 'Indigo',
    colorHex: '#4B0082',
  },
  {
    colorId: 'LightSalmon',
    colorHex: '#FFA07A',
  },
  {
    colorId: 'Black',
    colorHex: '#000000',
  },
]

const fontStylesList = [
  {
    styleId: 'normal',
    styleText: 'Normal',
  },
  {
    styleId: 'italic',
    styleText: 'Italic',
  },
  {
    styleId: 'oblique -90deg;',
    styleText: 'Oblique',
  },
]

class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    activeColorOptionId: differentColorsList[0].colorHex,
    activeFontStyleOptionId: fontStylesList[0].styleId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
    activeColor: '',
    activeFontStyle: '',
  }

  onChangeBackgroundImage = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSizeOptionID = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  onChangeColorOptionId = event => {
    this.setState({activeColorOptionId: event.target.value})
  }

  onChangeFontStyle = event => {
    this.setState({activeFontStyleOptionId: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
      activeColorOptionId,
      activeFontStyleOptionId,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
      activeColor: activeColorOptionId,
      activeFontStyle: activeFontStyleOptionId,
    })
  }

  renderMemeGeneratorForm = () => {
    const {
      activeFontSizeOptionId,
      activeColorOptionId,
      activeFontStyleOptionId,
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
    } = this.state

    return (
      <MemeGeneratorForm onSubmit={this.onGenerateMeme}>
        <CustomLabel htmlFor="backgroundImageUrl">Image URL</CustomLabel>
        <CustomInput
          type="text"
          id="backgroundImageUrl"
          value={backgroundImageUrlInput}
          onChange={this.onChangeBackgroundImage}
          placeholder="Enter the Image URL"
        />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          type="text"
          id="topText"
          value={topTextInput}
          onChange={this.onChangeTopTextInput}
          placeholder="Enter the Top Text"
        />
        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput
          type="text"
          id="bottomText"
          value={bottomTextInput}
          onChange={this.onChangeBottomTextInput}
          placeholder="Enter the Bottom Text"
        />
        <CustomLabel htmlFor="select">Font Size</CustomLabel>
        <CustomSelect
          id="select"
          value={activeFontSizeOptionId}
          onChange={this.onChangeFontSizeOptionID}
        >
          {fontSizesOptionsList.map(eachOption => (
            <CustomOption key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <CustomLabel htmlFor="color">Text Color</CustomLabel>
        <CustomSelect
          id="color"
          value={activeColorOptionId}
          onChange={this.onChangeColorOptionId}
        >
          {differentColorsList.map(eachOption => (
            <CustomOption key={eachOption.colorId} value={eachOption.colorHex}>
              {eachOption.colorId}
            </CustomOption>
          ))}
        </CustomSelect>
        <CustomLabel htmlFor="style">Font Style</CustomLabel>
        <CustomSelect
          id="style"
          value={activeFontStyleOptionId}
          onChange={this.onChangeFontStyle}
        >
          {fontStylesList.map(eachOption => (
            <CustomOption key={eachOption.styleId} value={eachOption.styleId}>
              {eachOption.styleText}
            </CustomOption>
          ))}
        </CustomSelect>
        <GenerateButton type="submit">Generate</GenerateButton>
      </MemeGeneratorForm>
    )
  }

  renderMeme = () => {
    const {
      backgroundImageUrl,
      topText,
      bottomText,
      activeFontSizeId,
      activeColor,
      activeFontStyle,
    } = this.state

    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImageUrl}>
        <TextContent
          activeFontSizeId={activeFontSizeId}
          activeColor={activeColor}
          activeFontStyle={activeFontStyle}
        >
          {topText}
        </TextContent>
        <TextContent
          activeFontSizeId={activeFontSizeId}
          activeColor={activeColor}
          activeFontStyle={activeFontStyle}
        >
          {bottomText}
        </TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            {this.renderMeme()}
            {this.renderMemeGeneratorForm()}
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
