import PropTypes from 'prop-types';
import { SectionWrapper, SectionHeader } from './styled-section.js'

export const Section = ({ title, children }) => (
  <SectionWrapper>
    <SectionHeader> {title}</SectionHeader>
    {children}
  </SectionWrapper>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};