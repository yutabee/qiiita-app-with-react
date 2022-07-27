import {useEffect, useState} from 'react';
import {css} from '@emotion/react';
import { Box } from '../atoms';
import { TextInput } from '../atoms/TextInput';

const SearchBar = ({onEnterPress, containerStyle, inputStyle, value}) => {
  const [inputValue, setInputValue] = useState(value);

  const handelValueCange = text => {
    setInputValue(text);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onEnterPress(inputValue);
    }
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <Box css={[contaienr, containerStyle]}>
      <TextInput
        placeholder="記事を検索"
        value={inputValue}
        onChange={event => handelValueCange(event.target.value)}
        onKeyPress={handleKeyPress}
        css={inputStyle}
          />
    </Box>
  );
};

export default SearchBar;

const contaienr = css`
  column-gap: 16px;
  align-items: center;
`;