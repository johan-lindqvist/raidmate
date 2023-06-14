import { ModalFooterProps } from './types.ts';
import { Footer } from './styled.ts';

export function ModalFooter(props: ModalFooterProps) {
  const { cancelButton, submitButton } = props;

  return (
    <Footer>
      {cancelButton}
      {submitButton}
    </Footer>
  );
}
