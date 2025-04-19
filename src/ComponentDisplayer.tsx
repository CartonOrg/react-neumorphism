import { css } from "@emotion/react";
import { createContext, ReactNode } from "react";

const styles = {
  container: css({
    display: "flex",
    gap: "20px",
    flexDirection: "column",
  }),
  title: css({
    fontSize: "20px",
    fontWeight: "bold",
  }),
  subtitle: css({
    fontSize: "16px",
    fontWeight: "600",
    color: "#8e8e8e",
    marginLeft: "20px",
  }),
  content: css({
    display: "flex",
    gap: "20px",
    alignItems: "center",
    marginLeft: "20px",
  }),
};

// Création du contexte
const DisplayerContext = createContext<{ id?: string }>({});

// Composant principal
export const ComponentDisplayer = ({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}): React.ReactNode => {
  return (
    <DisplayerContext.Provider value={{ id }}>
      <div css={styles.container}>{children}</div>
    </DisplayerContext.Provider>
  );
};

// Sous-composants
ComponentDisplayer.Title = ({ children }: { children: ReactNode }) => {
  return <h2 css={styles.title}>{children}</h2>;
};

ComponentDisplayer.Subtitle = ({ children }: { children: ReactNode }) => {
  return <h3 css={styles.subtitle}>{children}</h3>;
};

ComponentDisplayer.Content = ({
  children,
  direction = "row",
}: {
  children: ReactNode;
  direction?: "row" | "column";
}) => {
  return (
    <div css={[styles.content, css({ flexDirection: direction })]}>
      {children}
    </div>
  );
};
