import weather from './index'

describe('todo reducer', () => {
    it('should display init reducer', () => {
        expect(weather(undefined, {})).toEqual({weatherWidgets: []});
    });

    it('should add object', () => {
        expect(weather(undefined, {
            type: 'weather/addWidget',
            payload: {example: 'example'},
        })).toEqual({weatherWidgets: [{example: 'example'}]});
    });

    it('should remove object', () => {
        expect(
            weather({
                weatherWidgets: [{id: 1}]
            }
        , {
            type: 'weather/removeWidget',
            payload: 1,
        })).toEqual({weatherWidgets: []});
    });
})