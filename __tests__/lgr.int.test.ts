import { LGR } from '../src';

describe('LGR', () => {
  test('load and save LGR creates same file', async () => {
    const lgr = await LGR.load('__tests__/assets/lgr/Default.lgr');
    const lgrBuffer = await lgr.toBuffer();
    const loadedBuffer = await LGR.load(lgrBuffer);
    expect(lgr).toEqual(loadedBuffer);
  });
});