import styled from 'src/config/emotion'
import { AppText } from 'src/modules/Common/components/AppText'
import appTheme from 'src/styles/theme'

export const AppInputLabel = styled(AppText)`
  font-size: 10px;
  color: ${appTheme.colors.neutral[600]};
  margin-bottom: 8px;
  margin-left: 16px;
`

export const AppInputMessageError = styled(AppText)`
  color: ${appTheme.colors.error};
  font-size: 10px;
  margin-top: 8px;
  margin-left: 16px;
`
