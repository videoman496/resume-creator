/* eslint-disable react/prop-types */

import ReactDOM from 'react-dom';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Define your styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
  },
  section: {
    borderBottom: 1,
    borderBottomColor: '#000000',
    margin: "10px",
    padding: "15px",
    flexGrow: 0,
  },
});

// Create a component for the PDF document
const MyDocument = ({ contents }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {contents.map((content, index) => (
        <View key={index} style={styles.section}>
          <Text>{content}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

const PdfElement = () => {
  const handleGeneratePdf = () => {
    const divElements = document.querySelectorAll('.pdf-content');
    const contents = Array.from(divElements).map(div => div.innerText); // or div.innerHTML if needed

    // Create a container for the PDF viewer
    const pdfContainer = document.createElement('div');
    pdfContainer.id = 'pdf-preview';
    document.body.appendChild(pdfContainer);

    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(
      <PDFViewer width="400" height="600">
        <MyDocument contents={contents} />
      </PDFViewer>,
      pdfContainer
    );
  };

  return (
    <div>
      <button onClick={handleGeneratePdf}>Generate PDF</button>
      <div id="pdf-preview" />
    </div>
  );
};

export default PdfElement;
