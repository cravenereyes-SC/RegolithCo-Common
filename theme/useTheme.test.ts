import { applyThemeToElement, createThemeVariables, starCitizenTheme } from './theme'

describe('theme application helpers', () => {
  it('creates CSS variables from a theme', () => {
    const vars = createThemeVariables(starCitizenTheme)

    expect(vars['--sc-primary-bright']).toBe(starCitizenTheme.colors.primary.bright)
    expect(vars['--sc-font-primary']).toBe(starCitizenTheme.fonts.primary.family)
  })

  it('applies the variables to a target element', () => {
    const setProperty = jest.fn()
    const target = { style: { setProperty } } as any

    applyThemeToElement(starCitizenTheme, target)

    expect(setProperty).toHaveBeenCalledWith('--sc-primary-bright', starCitizenTheme.colors.primary.bright)
    expect(setProperty).toHaveBeenCalledWith('--sc-font-primary', starCitizenTheme.fonts.primary.family)
  })
})
