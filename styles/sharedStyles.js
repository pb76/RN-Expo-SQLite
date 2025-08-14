import { StyleSheet } from "react-native";

// Common color palette
export const colors = {
  primary: "#007AFF",
  secondary: "#5856D6",
  success: "#34C759",
  warning: "#FF9500",
  error: "#FF3B30",
  text: "#000000",
  textSecondary: "#666666",
  textMuted: "#999999",
  background: "#FFFFFF",
  backgroundSecondary: "#F5F5F5",
  border: "#E5E5E5",
  borderDark: "#DDDDDD",
};

// Common spacing values
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Common font sizes
export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

// Shared component styles
export const sharedStyles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },

  containerCentered: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.md,
  },

  // Text styles
  title: {
    fontSize: fontSize.xl,
    fontWeight: "bold",
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
    textAlign: "center",
    color: colors.text,
  },

  subtitle: {
    fontSize: fontSize.lg,
    fontWeight: "600",
    marginBottom: spacing.sm,
    color: colors.text,
  },

  text: {
    fontSize: fontSize.md,
    color: colors.text,
    lineHeight: fontSize.md * 1.4,
  },

  textSecondary: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    lineHeight: fontSize.sm * 1.4,
  },

  textMuted: {
    fontSize: fontSize.sm,
    color: colors.textMuted,
    lineHeight: fontSize.sm * 1.4,
  },

  textCenter: {
    textAlign: "center",
  },

  // Input styles
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.sm,
    marginBottom: spacing.sm,
    borderRadius: 5,
    backgroundColor: colors.background,
    fontSize: fontSize.md,
  },

  inputFocused: {
    borderColor: colors.primary,
  },

  // Button styles
  buttonContainer: {
    flexDirection: "row",
    gap: spacing.sm,
    marginVertical: spacing.sm,
    justifyContent: "center",
  },

  // Card styles
  card: {
    width: "100%",
    backgroundColor: colors.background,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  // List styles
  list: {
    flex: 1,
  },

  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.background,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },

  listItemContent: {
    flex: 1,
  },

  // Form styles
  form: {
    backgroundColor: colors.background,
    padding: spacing.md,
    borderRadius: 8,
    marginBottom: spacing.lg,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },

  // Spacing utilities
  marginTop: {
    marginTop: spacing.md,
  },

  marginBottom: {
    marginBottom: spacing.md,
  },

  marginVertical: {
    marginVertical: spacing.md,
  },

  marginHorizontal: {
    marginHorizontal: spacing.md,
  },

  paddingTop: {
    paddingTop: spacing.md,
  },

  paddingBottom: {
    paddingBottom: spacing.md,
  },

  paddingVertical: {
    paddingVertical: spacing.md,
  },

  paddingHorizontal: {
    paddingHorizontal: spacing.md,
  },

  // Layout utilities
  row: {
    flexDirection: "row",
  },

  column: {
    flexDirection: "column",
  },

  center: {
    alignItems: "center",
    justifyContent: "center",
  },

  spaceBetween: {
    justifyContent: "space-between",
  },

  spaceAround: {
    justifyContent: "space-around",
  },

  flex1: {
    flex: 1,
  },

  // Status styles
  successText: {
    color: colors.success,
    fontSize: fontSize.sm,
  },

  errorText: {
    color: colors.error,
    fontSize: fontSize.sm,
  },

  warningText: {
    color: colors.warning,
    fontSize: fontSize.sm,
  },
});

// Component-specific style creators
export const createButtonStyle = (color = colors.primary) =>
  StyleSheet.create({
    button: {
      backgroundColor: color,
      padding: spacing.sm,
      borderRadius: 5,
      alignItems: "center",
    },
    buttonText: {
      color: colors.background,
      fontSize: fontSize.md,
      fontWeight: "600",
    },
  });

export const createCardStyle = (backgroundColor = colors.background) =>
  StyleSheet.create({
    card: {
      ...sharedStyles.card,
      backgroundColor,
    },
  });

export default sharedStyles;
