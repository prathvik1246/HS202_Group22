import pandas as pd
import numpy as np

def calculate_match_percentage(file_a, file_b, key_column=None):
    # Load the CSV files into DataFrames
    df_a = pd.read_csv(file_a)
    df_b = pd.read_csv(file_b)
    
    # Find the common columns
    common_columns = df_a.columns.intersection(df_b.columns).tolist()
    
    if not common_columns:
        raise ValueError("The two CSV files do not have any common columns to compare")
    
    # If a key column is provided, align the rows based on the key
    if key_column:
        if key_column not in common_columns:
            raise ValueError(f"The key column '{key_column}' must be present in both CSV files")
        
        df_a.set_index(key_column, inplace=True)
        df_b.set_index(key_column, inplace=True)
        
        # Find the common rows based on the key column
        common_indices = df_a.index.intersection(df_b.index).tolist()
        if not common_indices:
            raise ValueError("The two CSV files do not have any common rows to compare")
        
        # Select only the common rows and columns
        df_a = df_a.loc[common_indices, common_columns]
        df_b = df_b.loc[common_indices, common_columns]
    else:
        # Select only the common columns
        df_a = df_a[common_columns]
        df_b = df_b[common_columns]
    
    # Convert DataFrames to numpy arrays for element-wise comparison
    array_a = df_a.to_numpy()
    array_b = df_b.to_numpy()
    
    # Calculate the number of matching values
    matches = np.sum(array_a == array_b)
    total_values = array_a.size
    
    # Calculate the percentage of matching values
    match_percentage = (matches / total_values) * 100
    
    return match_percentage

# Example usage
file_a = 'Training.csv'
file_b = 'test.csv'
key_column = 'ID'  # Replace with the actual key column name if available, or set to None if not needed

match_percentage = calculate_match_percentage(file_a, file_b, key_column)
print(f'The percentage of matching values is: {match_percentage:.2f}%')
