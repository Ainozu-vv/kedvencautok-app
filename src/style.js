import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#171A1D',
  },
  container: {
    flex: 1,
  },
  headerImage: {
    height: 180,
    justifyContent: 'flex-end',
  },
  headerImageInner: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerOverlay: {
    backgroundColor: 'rgba(23, 26, 29, 0.7)',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  appTitle: {
    color: '#F9FAFB',
    fontSize: 28,
    fontWeight: 'bold',
  },
  appSubtitle: {
    color: '#C3B4A5',
    fontSize: 14,
    marginTop: 4,
  },
  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    paddingTop: 12,
    gap: 8,
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#66605F',
    marginRight: 4,
    marginBottom: 6,
    backgroundColor: '#171A1D',
  },
  categoryButtonActive: {
    backgroundColor: '#8669AE',
    borderColor: '#8669AE',
  },
  categoryButtonText: {
    color: '#C3B4A5',
    fontSize: 13,
  },
  categoryButtonTextActive: {
    color: '#171A1D',
    fontWeight: 'bold',
  },
  brandRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    paddingTop: 4,
    paddingBottom: 4,
    gap: 8,
  },
  brandButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#66605F',
    marginRight: 4,
    marginBottom: 6,
    backgroundColor: '#171A1D',
  },
  brandButtonActive: {
    backgroundColor: '#B07A64',
    borderColor: '#B07A64',
  },
  brandButtonText: {
    color: '#C3B4A5',
    fontSize: 12,
  },
  brandButtonTextActive: {
    color: '#171A1D',
    fontWeight: 'bold',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 4,
  },
  infoText: {
    color: '#C3B4A5',
    fontSize: 13,
  },
  clearButtonContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingBottom: 24,
  },
  emptyText: {
    color: '#C3B4A5',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
  },
  detailsImage: {
    height: 240,
    justifyContent: 'flex-end',
  },
  detailsImageInner: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  detailsOverlay: {
    backgroundColor: 'rgba(23, 26, 29, 0.75)',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  detailsTitle: {
    color: '#F9FAFB',
    fontSize: 24,
    fontWeight: 'bold',
  },
  detailsCategory: {
    color: '#C3B4A5',
    fontSize: 14,
    marginTop: 4,
  },
  detailsContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 8,
  },
  detailsSpec: {
    color: '#F9FAFB',
    fontSize: 14,
  },
  detailsDescription: {
    color: '#C3B4A5',
    fontSize: 14,
    marginTop: 12,
    lineHeight: 20,
  },
  detailsButtonsRow: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 12,
  },
  detailsButton: {
    flex: 1,
    marginTop: 8,
  },
});

export const carCardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#3F3F3F',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#66605F',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  image: {
    width: '100%',
    height: 160,
  },
  content: {
    padding: 12,
    gap: 4,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },
  title: {
    color: '#F9FAFB',
    fontSize: 16,
    fontWeight: 'bold',
  },
  brand: {
    color: '#C3B4A5',
    fontSize: 12,
    marginTop: 2,
  },
  favoriteButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  favoriteText: {
    fontSize: 20,
  },
  category: {
    color: '#C3B4A5',
    fontSize: 13,
    marginTop: 4,
  },
  specRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
  },
  specText: {
    color: '#F9FAFB',
    fontSize: 13,
  },
  description: {
    color: '#C3B4A5',
    fontSize: 13,
    marginTop: 6,
  },
  detailsHint: {
    color: '#B07A64',
    fontSize: 12,
    marginTop: 6,
  },
});