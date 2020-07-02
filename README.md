# react-scheduling

> [Karen integration](https://karenapp.io) for React apps


## Install

```bash
npm install --save react-scheduling
```

## Documentation
This package provides three components to embed karen in your react app.


```javascript
import { InlineWidget, PopupWidget, PopupText } from 'react-scheduling';
```
To embed inline widget use
```javascript
<InlineWidget url="<user events url taken from karen account>" />
```
To embed popup widget use
```js
      <PopupWidget 
        url="<user events url taken from karen account>" 
        text="Create Meeting"
        textColor="#000000"
        color="#ffffff"
        branding
      />
```
To embed popup text use
```js
<PopupText url="<user events url taken from karen account>" text="Create Meeting" />
```
url is the required field in all three components.

